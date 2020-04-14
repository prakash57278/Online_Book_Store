package job.prac1.onlinebookstore.repositry;

import job.prac1.onlinebookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepositry extends JpaRepository<Book, Long> {
}
