# skittishMouse
A mouse that's afraid of advertisements 


### A mouse that physically reacts to your web browsing
#### Brings lives browser interactions to arduino
***
##### Utilizes a Chrome extension, node server, bluetooth serial & arduino to physically move your mouse cursor off of advertisements
##### Uses [Adafruit Bluefruit EZLink](http://www.adafruit.com/product/1588) connected to arduino Micro with [vibration motor](http://p.globalsources.com/IMAGES/PDT/B1073272595/4mm-Diameter-Coreless-Vibration-Motor.jp)
  
##### Currently testing only on nytimes.com frontpage
##### Schematic coming soon

  
    load unpacked adHover Chrome extension
    npm install
    ls /dev/cu.*   <- find Adafruit EZ Link
    node server.js /dev/cu.AdafruitEZ-Link4c81-SPP 
  
