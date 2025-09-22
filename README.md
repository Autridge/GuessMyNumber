# 🎲 Number Guessing Game

A fun and interactive number guessing game built with HTML, CSS, and JavaScript. Challenge yourself across multiple difficulty levels and see how high you can score!

## 🎮 Game Overview

Players attempt to guess a randomly generated number between 1-20. The game features three difficulty levels, each with different attempt limits and scoring systems. Your goal is to guess the correct number using as few attempts as possible to maximize your score.

## ✨ Features

Multiple Difficulty Levels

Rookie: 20 attempts, 3 points per remaining attempt
World-Class: 10 attempts, 5 points per remaining attempt
Legendary: 5 attempts, 7 points per remaining attempt

Smart Scoring System: Score starts equal to available attempts and decreases with each wrong guess
High Score Tracking: Persistent high score storage using localStorage
Responsive Design: Optimized for desktop, tablet, and mobile devices
Interactive UI: Engaging visual feedback and smooth transitions
Real-time Feedback: Instant hints whether your guess is too high or too low

## 🎮 Game System

```bash // Score calculation
finalScore = remainingAttempts × difficultyMultiplier

// Difficulty multipliers
rookie: 3 points per attempt
world-class: 5 points per attempt
legendary: 7 points per attempt
```

Scoring Examples

Rookie: Guess correctly with 15 attempts left = 15 × 3 = 45 points
World-Class: Guess correctly with 6 attempts left = 6 × 5 = 30 points
Legendary: Guess correctly with 3 attempts left = 3 × 7 = 21 points
