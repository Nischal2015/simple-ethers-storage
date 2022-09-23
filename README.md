# Simple Ethers Storage

## Description

**SIMPLE ETHERS STORAGE** is a simple smart contract that store people and their favorite numbers built using Ethereum and Solidity along with Typescript.

<p style="display:flex;gap:6px;">
    <img alt="Typescript" src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" />
    <img alt="Solidity" src="https://img.shields.io/badge/Solidity-%23363636.svg?style=flat-square&logo=solidity&logoColor=white" />   
    <img alt="Ethereum" src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat-square&logo=Ethereum&logoColor=white" />
</p>

## Table of Contents

- [Installation](#installation-and-setup)
- [Setup](#setup)
- [Usage](#usage)

## Installation and Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed on your PC. Recommended to go with the LTS version.

Also make sure you have installed Typescript globally. To install typescript globally on you device.

```bash
npm i -g typescript
```

To install dependencies:

```bash
npm install
# or
yarn
```

## Setup

Once all the installations are complete, First create an `.env` file on the root folder of the project.

<img src="https://raw.githubusercontent.com/Nischal2015/simple-ethers-storage/main/assets/env-file.png" alt="Env file">

We need two environment variables `PRIVATE_KEY` and `RPC_URL`

To get environment variables, download [Ganache](https://trufflesuite.com/ganache/) and run the program. To setup Ganache follow [here](https://trufflesuite.com/docs/ganache/quickstart/).

After proper setup you should see something like this

<img src="https://raw.githubusercontent.com/Nischal2015/simple-ethers-storage/main/assets/ganache.png" alt="Ganache">

To get the `RPC_URL`, simply copy the RPC server.

<img src="https://raw.githubusercontent.com/Nischal2015/simple-ethers-storage/main/assets/ganache-rpc-url.png" alt="RPC URL">

For `PRIVATE_KEY`, click on the key icon.

<img src="https://raw.githubusercontent.com/Nischal2015/simple-ethers-storage/main/assets/ganache-show-key.png" alt="Ganache show key">

You should see a pop up

<img src="https://raw.githubusercontent.com/Nischal2015/simple-ethers-storage/main/assets/ganache-private-key.png" alt="Ganache Private Key">

Copy the `PRIVATE_KEY`.

Paste your `RPC_URL` and `PRIVATE_KEY` in the `.env` file created earlier.

<img src="https://raw.githubusercontent.com/Nischal2015/simple-ethers-storage/main/assets/env-keys.png" alt="Env keys">

```bash
# Make sure you do not include any "" while writing the environment variables

# Correct ✅
PRIVATE_KEY=abcdefghijklmnopqrstuvwxyz

# Wrong ❌
PRIVATE_KEY="abcdefghijklmnopqrstuvwxyz"
```

## Usage

Once all the packages are installed, run the following command to deploy your contract on local network

```bash
npm deploy
# or
yarn deploy
```

To compile the `.sol` file, run the following command

```bash
npm compile
# or
yarn compile
```
