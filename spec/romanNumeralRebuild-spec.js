import { numberConverter } from './../src/romanNumeralRebuild';
import { isGreaterThanFourThousand } from './../src/romanNumeralRebuild';
import { isNumber } from './../src/romanNumeralRebuild';

describe('Number', function() {

  it('should test if input is a number', function() {
    expect(isNumber(1)).toEqual(true);
    expect(isNumber("a")).toEqual(undefined);
  });

  it("is a number less than 4000", function() {
    expect(isGreaterThanFourThousand(3999)).toEqual(true);
    expect(isGreaterThanFourThousand(4001)).toEqual(undefined);
  });

  it('should test if number is converted to roman numeral', function() {
    expect(numberConverter(3)).toEqual("III");
  });
});
