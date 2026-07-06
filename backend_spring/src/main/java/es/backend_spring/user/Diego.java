package es.backend_spring.user;

import java.util.List;

public class Diego implements DesarrolladorFS {

    List<String> HARDSKILLS = List.of("Java", "Spring Boot", "APIs REST", "Node.js", "Angular", "React", "TypeScript", "ElectronJS", "MySQL", "MongoDB", "WSL", "Linux", "Docker Compose", "Git/GitHub");

    @Override
    public boolean teamwork() {
        return true;
    }
    @Override
    public boolean comunication() {
        return true;
    }
    @Override
    public boolean troubleShooting() {
        return true;
    }
    @Override
    public boolean attentionToDetail() {
        return true;
    }
    @Override
    public boolean adaptability() {
        return true;
    }
    @Override
    public boolean analyticalThinking() {
        return true;
    }
    @Override
    public boolean selfAwareness() {
        return true;
    }
}