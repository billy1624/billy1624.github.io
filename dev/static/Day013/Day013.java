class Animal {
    protected String name;
    protected String dateOfBirth;
    protected boolean alive;

    public Animal(String name, String dateOfBirth, boolean alive) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.alive = alive;
    }
    public void print() {
        print("");
    }
    public void print(String pre) {
        System.out.println(pre + "name = " + name);
        System.out.println(pre + "dateOfBirth = " + dateOfBirth);
        System.out.println(pre + "alive = " + alive);
    }
    public void eat() {
        System.out.println(name + " can eat!");
    }
};


class Human extends Animal {
    private Human father;
    private Human mother;

    public Human(String name, String dateOfBirth, boolean alive, Human father, Human mother) {
        super(name, dateOfBirth, alive);
        this.father = father;
        this.mother = mother;
    }
    public void print() {
        print("");
    }
    public void print(String pre) {
        super.print(pre);
        if ( father != null ) {
            System.out.println(pre + "father: {");
            father.print(pre+pre);
            System.out.println(pre + "}");
        }
        if ( mother != null ) {
            System.out.println(pre + "mother: {");
            mother.print(pre+pre);
            System.out.println(pre + "}");
        }
    }
    public void eat() {
        System.out.println(name + " eat fires! loll");
    }
};


class Dog extends Animal {
    public Dog(String name, String dateOfBirth, boolean alive) {
        super(name, dateOfBirth, alive);
    }
    public void print() {
        print("");
    }
    public void print(String pre) {
        super.print(pre);
    }
    public void bark() {
        System.out.println(name + " bark!");
    }
};


/**
 * Want to learn more about inheritance in Java,
 * please see https://www.geeksforgeeks.org/inheritance-in-java/
 * Or simply Google search!
 */


public class Day013 {

    public static void main(String[] args) {

        Human mother = new Human("Amy", "1990-04-06", true, null, null);
        Human father = new Human("Bob", "1990-01-02", true, null, null);
        Human child = new Human("Canny", "2019-01-05", true, father, mother);
        Dog puppy = new Dog("Puppy", "2019-06-03", true);
        String pre = "    ";  // for indentation

        System.out.println("mother: {");
        mother.print(pre);
        System.out.println("}" + "\n");

        System.out.println("father: {");
        father.print(pre);
        System.out.println("}" + "\n");

        System.out.println("child: {");
        child.print(pre);
        System.out.println("}" + "\n");

        System.out.println("puppy: {");
        puppy.print(pre);
        System.out.println("}" + "\n");

        mother.eat();
        father.eat();
        child.eat();
        puppy.eat();
        puppy.bark();

    }
}
