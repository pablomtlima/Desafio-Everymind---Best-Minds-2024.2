package com.nunes.sports.controller;

import com.nunes.sports.product.Product;
import com.nunes.sports.product.ProductRepository;
import com.nunes.sports.product.ProductRequest;
import com.nunes.sports.product.ProductResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173") // Permita a origem específica do seu frontend
@RestController
@RequestMapping("products")
public class productsController {

    @Autowired
    private ProductRepository repository;

    @GetMapping
    public List<ProductResponse> getAllProducts() {

        List<ProductResponse> productList = repository.findAll().stream().map(ProductResponse :: new).toList();
        return productList;
    }

    @PostMapping
    public ResponseEntity saveProduct(@RequestBody ProductRequest data) {
        Product productData = new Product(data);
        repository.save(productData);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    @Transactional
    public ResponseEntity updateProduct(@RequestBody ProductRequest data) {
        Optional<Product> productData = repository.findById(data.id());
        if (productData.isPresent()) {
            Product product = productData.get();
            product.setName(data.name());
            product.setPrice(data.price());
            product.setDescription(data.description());
            return ResponseEntity.ok().body(product);

        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }


}
