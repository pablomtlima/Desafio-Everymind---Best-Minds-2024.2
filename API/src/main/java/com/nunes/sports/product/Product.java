package com.nunes.sports.product;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "products")
@Entity(name = "products")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String description;
    private double price;

    public Product(ProductRequest data) {
        this.name = data.name();
        this.description = data.description();
        this.price = data.price();

    }
}
