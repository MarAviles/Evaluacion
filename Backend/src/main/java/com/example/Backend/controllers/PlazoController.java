package com.example.Backend.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.Backend.models.Plazo;
import com.example.Backend.services.PlazoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plazo")
@CrossOrigin(origins = "http://localhost:4200")
public class PlazoController {
    @Autowired
    PlazoService PlazoService;

    @GetMapping()
    public ArrayList<Plazo> conseguirPlazos(){
        return PlazoService.TodosLosPlazos();
    }

    @PostMapping()
    public String guardarPlazo(@RequestBody Plazo plazo){
        return PlazoService.guardarPlazo(plazo);
    }

    @PostMapping("search")
    public List<Plazo> BuscarProducto(@RequestParam("query") Integer query){
        var nombre = PlazoService.BuscarPorPalabra(query);
        return nombre;
    }
}
