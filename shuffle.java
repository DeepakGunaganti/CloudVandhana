import java.util.*;
 
public class GFG {
    public static void main(String[] args)
    {
        List<Integer> mylist = new ArrayList<>();
        mylist.add(1);
        mylist.add(2);
        mylist.add(3);
        mylist.add(4);
        mylist.add(5); 
        mylist.add(6);
 
        System.out.println("Original List : \n" + mylist);
 
        Collections.shuffle(mylist);
 
        System.out.println("\nShuffled List : \n" + mylist);
    }
}
