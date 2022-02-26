package com.example.Backend.controllers;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.Backend.models.Producto;
import com.example.Backend.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {
    @Autowired
    ProductoService ProductoService;

    @GetMapping()
    public ArrayList<Producto> conseguirEmpleado(){
        return ProductoService.TodoslosProductos();
    }

    @PostMapping()
    public String guardarProducto(@RequestBody Producto producto){
        return ProductoService.guardar(producto);
    }

    @GetMapping("/{id}")
    public Optional<Producto> obtenerProductoPorId(@PathVariable Long id){
        return ProductoService.obtenerId(id);
    }

    @PutMapping("editar/{id}")
    public void editarProducto(@RequestBody Producto producto){
        ProductoService.editarProducto(producto);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarPorId(@PathVariable Long id){
        ProductoService.eliminarProducto(id);
    }

    @PostMapping("search")
    public List<Producto> BuscarFlor(@RequestParam("query") String query){
        var nombre = ProductoService.Buscarporpalabra(query);
        System.out.println(nombre);
        return nombre;
    }
}
