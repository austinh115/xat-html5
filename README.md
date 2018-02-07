# Downloader for Xat HTML5

An easy script to download required files for xat's HTML5 client and apply basic patches to xatcore.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the script

* [Source Files](https://github.com/austinh115/xat-html5/archive/master.zip) - The source
* [Node.js](https://nodejs.org/en/) - To run the script

### Installing

A step by step series of examples that tell you have to it working

Download and install node.js [here](https://nodejs.org/en/download/) and add it to your path

Download and extract the source

Open CMD and run the following command

```
npm install
```

## Deployment

Run the following commands in your CMD window

```
node . [your domain]
```
Example: ``node . ioj.cx``

This will download all (most) required files and setup xatcore.php for usage with `your.domain`.
