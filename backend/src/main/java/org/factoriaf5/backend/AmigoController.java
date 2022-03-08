package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AmigoController {
    private AmigoRepository amigoRepository;

    @Autowired
    public AmigoController(AmigoRepository amigoRepository) {
        this.amigoRepository = amigoRepository;
    }

    @GetMapping("/amigos")
    public List<Amigo> allAmigo() {
        return amigoRepository.findAll();
    }
}


