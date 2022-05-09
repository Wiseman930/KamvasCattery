describe ("bookingCost function", function(){
    it("Monday returns a normal booking cost", function(){
        assert.equal(135, bookingCost({
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
          }))
    });
    it("Wednesday returns a booking cost with 25% discount", function(){
        assert.equal(101.25, bookingCost({
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name : 'Snowy'
          }))
    });
    it("Tuesday returns a normal booking cost", function(){
        assert.equal(135, bookingCost({
            check_in_day: 'Tuesday',
            duration: 3,
            cat_name : 'Snowy'
          }))
    });
    it("Friday returns a booking cost with a 15% discount", function(){
        assert.equal(114.75, bookingCost({
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
          }))
    })
  })
