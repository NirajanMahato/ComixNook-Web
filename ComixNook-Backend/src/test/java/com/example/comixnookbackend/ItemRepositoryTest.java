package com.example.comixnookbackend;

import com.example.comixnookbackend.Entity.Item;
import com.example.comixnookbackend.Repo.GenreRepo;
import com.example.comixnookbackend.Repo.ItemRepo;
import com.example.comixnookbackend.util.ImageToBase64;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.time.LocalDate;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ItemRepositoryTest {
    @Autowired
    private ItemRepo itemRepo;
    @Mock
    private GenreRepo genreRepo;

    @Mock
    private ImageToBase64 imageToBase64;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveItem(){
        Item item = new Item();

        item.setItemName("Item Name1");
        item.setReleasedDate(LocalDate.of(2003, 12, 12));
        item.setItemDescription("This is the discription of the comic");
        item.setDownloadLink("https://example.com/download");
        item.setItemImage(null);
//        item.setGenreId(1L);

        item = itemRepo.save(item);

        Assertions.assertThat(item.getItemId()).isGreaterThan(0);
    }
}
