package org.factoriaf5.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FriendController {
    private FriendRepository friendRepository;

    @Autowired
    public FriendController(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    @GetMapping("/friends")
    public List<Friend> allFriend() {
        return friendRepository.findAll();
    }
}


