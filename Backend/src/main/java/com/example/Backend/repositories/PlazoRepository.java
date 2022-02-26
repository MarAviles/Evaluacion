package com.example.Backend.repositories;

import java.util.List;

import com.example.Backend.models.Plazo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PlazoRepository extends CrudRepository<Plazo,Long>{
 
    @Query(value = "SELECT * FROM plazo pl WHERE pl.semanas = keyword", nativeQuery = true)
    public List<Plazo> EncontrarPorPalabra(Integer keyword);
}