# Bloom
a software-powered education system. ⬢‿⬢

This repository is a self-contained service, providing everything necessary to
run an instance of Bloom.  Community not included.

## Quick Start
`npm install && node bloom.js`

## Developer Guide
We're using Maki to build a full-stack application from a simple set of type
definitions.  If you want to hack on Bloom, you'll want to modify Maki directly.

1. Fork `martindale/maki` and get a working copy locally.
2. In your `maki` folder, run `npm link` to expose your local copy.
3. In the `bloom` folder, run `npm link maki` to use that copy.
