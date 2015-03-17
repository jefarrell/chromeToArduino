# Chrome to Arduino


***
### A method to take Chrome interactions out of the browser to Arduino
#### Communicates live browser action to the physical world
***
##### Features a Chrome extension and node server speaking to bluetooth serial device & Arduino
##### [Adafruit Bluefruit EZLink](http://www.adafruit.com/product/1588) connected to Arduino Micro with [vibration motor](https://catalog.precisionmicrodrives.com/order-parts/product/304-109-5mm-vibration-motor-8mm-type)

Information flow: Chrome extension > XMLHTTP request > node server > node serial to Bluefruit EZLink > Arduino

Content-script click function works universally.  Ad hover functionality currently being tested on NYT front page, and is listed as an example of potential interactions that are possible.

Schematic coming soon

##### Steps to run:  
    clone repo
    load unpacked adHover Chrome extension
    npm install
    ls /dev/tty.*   <- find Adafruit EZ Link
    node server.js /dev/tty.AdafruitEZ-Linkxxxx-xxxx (whatever you found in previous step)
  

##### This was the best method I found for taking Chrome extension interactions out of the browser.  Please let me know if you have discovered other successful methods.
