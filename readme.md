# Test the Time To First Byte in Command Line Interface

## What you get 

<img src="http://g.recordit.co/CIIVUXEn2j.gif" style="display:block;margin:auto;">

## What you need

You need to have curl installed on your machine.
If ```curl --help``` returns an error this module will not work, install it first. 

## How to use

### Install it globally

```npm install -g ttfb-test```

### Run a test

```ttfb-test https://www.google.com/```

Will run 30 test on this url and give you the average Time To First Byte.

### Run more than 30 tests

Add the number of run after the URL argument.

eg : let's run 80 tests:

```ttfb-test https://www.google.com/ 80```

### Stop a test

If you stop a test (ctrl + C ) it will return the average of the tests you already ran.


