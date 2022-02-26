package com.example.Backend.services;

import java.util.ArrayList;

import com.example.Backend.models.Plazo;
import com.example.Backend.repositories.PlazoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlazoService {   
    @Autowired
    PlazoRepository PlazoRepository;

    public ArrayList<Plazo> TodosLosPlazos(){
        return (ArrayList<Plazo>) PlazoRepository.findAll();
    }

    public String guardarPlazo(Plazo plazo) {
        PlazoRepository.save(plazo);
        return "guardado correctamente";
    }
}
