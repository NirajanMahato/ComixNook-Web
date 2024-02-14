package com.example.comixnookbackend.Entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name="item")
public class Item {
    @Id
    @SequenceGenerator(name = "users_seq_gen", sequenceName = "users_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "users_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long itemId;

    @Column(name = "item_name", nullable = false, unique = true)
    private String itemName;

    @Column(name = "release_date")
    private LocalDate releasedDate;

    @Column(name = "author")
    private String author;

    @Column(name = "item_image")
    private String itemImage;

    @ManyToOne
    @JoinColumn(name = "genre_id", nullable = false)
    private Genre genreId;
}
