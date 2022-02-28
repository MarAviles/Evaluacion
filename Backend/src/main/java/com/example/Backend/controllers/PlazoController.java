package com.example.Backend.controllers;

import java.util.ArrayList;

import com.example.Backend.models.Plazo;
import com.example.Backend.services.PlazoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plazo")
@CrossOrigin(origins = "http://localhost:4200")
public class PlazoController {
    @Autowired
    PlazoService PlazoService;

    @GetMapping()
    public ArrayList<Plazo> conseguirPlazo(){
        return PlazoService.todosLosPlazos();
    }   
    
    @PostMapping()
    public String guardarProducto(@RequestBody Plazo plazo){
        return PlazoService.guardarPlazo(plazo);
    }

}
