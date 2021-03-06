package com.example.Backend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.Backend.models.Producto;
import com.example.Backend.repositories.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {
    @Autowired
    ProductoRepository ProductoRepository;

    public ArrayList<Producto> TodoslosProductos(){
        return (ArrayList<Producto>) ProductoRepository.findAll();
    }

    public String guardar(Producto producto){
        ProductoRepository.save(producto);
        return "guardado correctamente";
    }

    public Optional<Producto> obtenerId(Long id){
        return ProductoRepository.findById(id);
    }

    public void editarProducto(Long id, Producto producto){
        System.out.println("este es el id"+id);
        Producto updateP = ProductoRepository.findById(id).get();
        updateP.setAll(producto);
        ProductoRepository.save(updateP);
    }

    public void eliminarProducto(Long id){
        ProductoRepository.deleteById(id);
    }

    public List<Producto> BuscarPorPalabra(String palabra) {
        return ProductoRepository.EncontrarPorPalabra(palabra);
    }
}
