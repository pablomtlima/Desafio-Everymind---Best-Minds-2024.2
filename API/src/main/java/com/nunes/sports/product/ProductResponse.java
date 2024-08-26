package com.nunes.sports.product;

public record ProductResponse(Long id, String name, String description, double price) {
    public ProductResponse(Product product){
        this(product.getId(), product.getName(), product.getDescription(), product.getPrice());
    }
}
