package com.example.Backend.repositories;

import java.util.List;
import java.util.Optional;

import com.example.Backend.models.Producto;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ProductoRepository extends CrudRepository<Producto,Long>{

    Optional<Producto> findById(Long id);
    @Query(value = "SELECT * FROM producto pro WHERE pro.nombre LIKE %:keyword%", nativeQuery = true)
    List<Producto> EncontrarPorPalabra(@Param("keyword") String keyword);

}
