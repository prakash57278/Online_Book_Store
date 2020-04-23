package job.prac1.onlinebookstore.repositry;

import job.prac1.onlinebookstore.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface BookRepositry extends JpaRepository<Book, Long> {
}
