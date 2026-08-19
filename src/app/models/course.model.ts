
export interface Course {
  id: number;
  code: string;
  title: string;
  maxCapacity: number;
  enrollmentCount: number;
}

/** Envelope for `GET /api/courses` — TMS API contract list shape (`Pag
edResponse<T>`). */
export interface PagedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}
export interface Course {
  id: number;
  code: string;
  title: string;
  maxCapacity: number;
  enrollmentCount: number;
  status?: string;
}

export interface CourseLink {
  rel: string;
  href: string;
  method?: string;
}

export interface CourseDetail extends Course {
  readonly links: CourseLink[];
}
