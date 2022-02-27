package com.example.Backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="plazo")
public class Plazo {

    @Id @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false )

    private Long id;
    private Long semanas;
    private Float tasanormal;
    private Float tasapuntual;

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public Long getSemanas() {
        return semanas;
    }

    public void setSemanas(Long semanas){
        this.semanas = semanas;
    }

    public Float getTasanormal(){
        return tasanormal;
    }

    public void setTasanormal(Float tasanormal){
        this.tasanormal = tasanormal;
    }

    public Float getTasapuntual(){
        return tasapuntual;
    }

    public void setTasapuntual(Float tasapuntual){
        this.tasapuntual = tasapuntual;
    }



}
