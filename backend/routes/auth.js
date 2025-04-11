import express from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import User from '../models/User.js';
import sendEmail from '../utils/sendEmail.js';

const router = express.Router();
/// Register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, ...rest } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: 'Email already in use' });

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 10);

    // ⏰ Set expiry to 10 minutes
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpires: expiresAt, // stored as Date
      isVerified: false,
      ...rest,
    });

    const verifyUrl = `http://localhost:5173/verify?token=${verificationToken}&email=${encodeURIComponent(
      email
    )}`;

    await sendEmail(
      email,
      'Verify your Flare account',
      `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hi ${firstName},</h2>
          <p>Thank you for registering on <strong>Flare</strong>.</p>
          <p>To complete your registration, please verify your email by clicking the secure link below:</p>
          <p>
            <a 
              href="${verifyUrl}" 
              style="background-color: #7e3af2; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;"
              target="_blank"
            >
              Verify My Email
            </a>
          </p>
          <p>This link is valid for 10 minutes.</p>
          <p>If you did not sign up for Flare, you can safely ignore this email.</p>
          <hr />
          <p style="font-size: 12px; color: #999;">This is a secure email from Flare Technologies.</p>
        </div>
      `
    );

    res
      .status(200)
      .json({ message: 'Check your email to verify your account.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Verify
router.get('/verify', async (req, res) => {
  const { email, token } = req.query;

  try {
    const user = await User.findOne({ email, verificationToken: token });

    if (!user || user.verificationTokenExpires < Date.now()) {
      return res.status(400).json({ message: 'Token is invalid or expired.' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Email verified. You can now log in.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during verification.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.isVerified) {
    return res
      .status(401)
      .json({ message: 'Invalid credentials or email not verified.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Incorrect password.' });

  res.status(200).json({ message: 'Logged in successfully', user });
});

export default router;
