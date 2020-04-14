package job.prac1.onlinebookstore.entity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table
@Setter
@Getter
@ToString
public class BookCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String category_name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Book> book;
}
