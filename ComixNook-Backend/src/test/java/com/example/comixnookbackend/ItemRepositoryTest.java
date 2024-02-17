package com.example.comixnookbackend;


import com.example.comixnookbackend.Entity.Item;
import com.example.comixnookbackend.Repo.ItemRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.time.LocalDate;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ItemRepositoryTest {
    @Autowired
    private ItemRepo itemRepo;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveItem(){
        Item item = new Item();

        item.setItemName("Item image1");
        item.setAuthor("Robert");
        item.setReleasedDate(LocalDate.of(2003, 12, 12));
//        item.setGenreId();
//        item.setItemImage("image1.jpg");

        item = itemRepo.save(item);

        Assertions.assertThat(item.getItemId()).isGreaterThan(0);
    }
}
