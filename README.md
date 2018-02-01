# Downloader for Xat HTML5

An easy script to download required files for xat's HTML5 client and apply basic patches to xatcore.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

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
Example: ``node . ixat.io``

This will download all (most) required files and setup xatcore.php for usage with `your.domain`.

Afterward, open a text editor such as NP++ or Sublime Text and search all files for "xat.com" and replace all with `your.domain`.
Do the same for "xatech.com"
