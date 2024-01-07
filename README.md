# Surfscreen

> Rotating surf cam screensaver

## About

The Surfscreen CLI launches a full-screen browser window that rotates between a list of surf cams. Put it on your extra monitor or idle TV to keep an eye on the surf.

## Development

Get started contributing to Surfscreen's codebase.

### Prerequisites

Configure the following prerequisites:

1. [Git (v2.x)](https://git-scm.com/downloads).

2. [Node.js (LTS)](https://nodejs.org/en/download).

3. [Surfline Premium](https://www.surfline.com/premium/signup).

### Setup

Clone the repository and checkout a new branch:

```sh
git clone https://github.com/seacoastpartners/surfscreen.git
cd surfscreen
git checkout -b <"feature || bug || enhancement">/<"your-branch-name"
```

### Install

Install npm dependencies:

```sh
npm install
```

### Configuration

Create a `.env` file in the root directory with the following environment variables:

```sh
EMAIL=<your-surfline-email>
PASSWORD=<your-surfline-password>
ROTATION_PERIOD=<number-of-seconds-per-cam> # default: 60
```

### Run

Run the development script:

```sh
npm run dev
```
