{
  /**
   * Enum: 여러 가지 관련된 상수 값들을 한 곳에 모아서 관리할 때 주로 사용
   */

  // Javascript
  const MAX_NUMBER = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  // DAYS_ENUM.MONDAY = 1; // Cannot assign to 'MONDAY' because it is a read-only property.

  // Typescript (Enum)
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Monday);
  let days: Days;
  days = Days.Tuesday;
  days = 10;
  console.log(days);

  type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

  let dayOfWeek: DayOfWeek;
  // dayOfWeek = 10; // Type '10' is not assignable to type 'DayOfWeek'.
  // dayOfWeek = "sugar"; // Type '"sugar"' is not assignable to type 'DayOfWeek'.
  dayOfWeek = "Monday";
  dayOfWeek = "Sunday";

  /**
   * Example
   */

  type ErrorsType = "error message simple version" | "error message complicated version" | "error message complicated detail version";
  let errorMessage: ErrorsType;
  errorMessage = "error message complicated detail version";

  enum ErrorsEnum {
    Short = "error message simple version",
    Long = "error message complicated version",
    Detail = "error message complicated detail version",
  }
  let errorMessage2: ErrorsEnum;
  errorMessage2 = ErrorsEnum.Short;
  errorMessage2 = ErrorsEnum.Long;
}
