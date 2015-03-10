///////////////////////////////////////////////////
///---Chrome Extension to Arduino---///////////////
///////////////////////////////////////////////////


int motorPin = 3;
int incomingByte = 0;

// Initialize pinMode
// Using Serial and Serial1 ports due to use with Arduino Micro
// Serial port is for USB port, Serial1 is for TX/RX pins
void setup() {
  pinMode(motorPin, OUTPUT);
  Serial1.begin(9600);
  Serial.begin(9600);
}


void loop() {
  if (Serial1.available() > 0) {
    incomingByte = Serial1.read();
    // If a 'y' comes in through the Serial1 port, turn the motor on
    if (incomingByte == 'y') {
       for(int motorValue = 0 ; motorValue <= 255; motorValue +=5){
           analogWrite(motorPin, motorValue); 
           delay(30);      
         }
       for(int motorValue = 255 ; motorValue >= 0; motorValue -=5){
           analogWrite(motorPin, motorValue); 
           delay(30);      
         }
       Serial.write(incomingByte);
    }
  }
} 
