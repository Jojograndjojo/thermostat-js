function Thermostat() {
  this.start = 20;
  this.currentTemperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_ON = 25;
  this.MAXIMUM_TEMPERATURE_OFF = 32;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_LIMIT = 18;
};



Thermostat.prototype.up = function(){
  if(this.currentTemperature >= this.MAXIMUM_TEMPERATURE_ON && this.powerSavingMode === true){
    return this.MAXIMUM_TEMPERATURE_ON
  }
  if(this.currentTemperature >= this.MAXIMUM_TEMPERATURE_OFF && this.powerSavingMode === false){
    return this.MAXIMUM_TEMPERATURE_OFF
  }
  this.currentTemperature++;
};

Thermostat.prototype.down = function(){
  if(this.currentTemperature <= this.MINIMUM_TEMPERATURE){
    return this.MINIMUM_TEMPERATURE;
  }
  this.currentTemperature--;
};


Thermostat.prototype.switchPowerSavingModeOn = function(){
    this.powerSavingMode = true
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
    this.powerSavingMode = false
};

Thermostat.prototype.reset = function(){
  this.currentTemperature = this.start;
};

Thermostat.prototype.returnUsage = function(){
  if(this.currentTemperature < this.MEDIUM_ENERGY_LIMIT){
      return 'low-usage';
  }
  if(this.currentTemperature >= this.MEDIUM_ENERGY_LIMIT && this.currentTemperature <= this.MAXIMUM_TEMPERATURE_ON){
      return 'normal-usage';
  }
  return 'high-usage';
};
