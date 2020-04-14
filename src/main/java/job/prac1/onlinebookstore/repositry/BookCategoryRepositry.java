package job.prac1.onlinebookstore.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import job.prac1.onlinebookstore.entity.BookCategory;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "bookCategory" ,path = "book-category")
public interface BookCategoryRepositry extends JpaRepository<BookCategory, Long> {
}
