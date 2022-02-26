package com.example.Backend.repositories;

import java.util.List;

import com.example.Backend.models.Producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ProductoRepository extends JpaRepository<Producto,Long>{
    
    @Query(value = "select * from productos pro where pro.nombre like %:keyword%", nativeQuery = true)
    List<Producto> EncontrarPorPalabra(@Param("keyword") String keyword);
}
