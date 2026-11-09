function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier) {
    return value * multiplier;
  } else {
    if (multiplier === 0) {
      return value * multiplier;
    } else {
      return value * 2;
    }
  }
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}

function formatCoordinate(location: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = location;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const filteredCourses = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
  return filteredCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
