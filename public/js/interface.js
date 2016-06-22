$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power_saving_status').text('on')
    updateTemperature();
  });

  $('#off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power_saving_status').text('off')
    updateTemperature();
  });

function updateTemperature(){
  $('#temperature').text(thermostat.currentTemperature);
};
});
