package com.nunes.sports.product;

import jakarta.annotation.Nonnull;

import java.io.Serializable;

public record ProductRequest(
        Long id,

        @Nonnull
        String name,

        @Nonnull
        String description,

        @Nonnull
        double price ) {}
