package job.prac1.onlinebookstore.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import job.prac1.onlinebookstore.entity.BookCategory;

public interface BookCategoryRepositry extends JpaRepository<BookCategory, Long> {
}
