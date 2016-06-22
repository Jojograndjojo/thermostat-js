describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('returns a starting temperature of 20', function(){
    expect(thermostat.start).toBe(20);
  });

  it('it has power saver on by default', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('increases the temperature', function(){
    thermostat.up();
    expect(thermostat.currentTemperature).toBe(21);
  });

  it('decreases the temperature', function(){
    thermostat.down();
    expect(thermostat.currentTemperature).toBe(19);
  });

  it('has a minimum temperature of 10', function(){
    for (var i = 0; i < 12; i++) {
      thermostat.down();
    };
    expect(thermostat.currentTemperature).toBe(10);
  });

  it('has  a temperature of 20 when reset button is pressed', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.currentTemperature).toBe(20);
  });

    describe('Energy usage', function(){
      it('returns low usage', function(){
        for (var i = 0; i < 10; i++) {
          thermostat.down();
        };
        expect(thermostat.returnUsage()).toBe('low-usage');
      });

      it('returns normal usage', function(){
        expect(thermostat.returnUsage()).toBe('normal-usage');
      });

      it('returns high usage', function(){
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 10; i++) {
          thermostat.up();
        };
        expect(thermostat.returnUsage()).toBe('high-usage');
      });
    });

    describe('Power saving mode is on', function(){
      it('has a maximum temperature of 25', function(){
        for (var i = 0; i < 345 ; i++) {
          thermostat.up();
      };
      expect(thermostat.currentTemperature).toBe(25);
    });
  });

    describe('Power saving mode is off', function(){
      it('has a maximum temperature of 32', function(){
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 345 ; i++) {
          thermostat.up();
      };
      expect(thermostat.currentTemperature).toBe(32);
     });
  });
});
