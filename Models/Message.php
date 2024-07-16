<?php
class Message extends Db
{
    public int $id;
    public string $name;
    public string $email;
    public string $message;


    /**
     * Methode qui crée un nouveau personnage dans la base de donnée.
     * @return void
     */
    public function contact()
    {
        $query = 'INSERT INTO `contact` (`name`, `email`, `message`) VALUES 
    (:name, :email, :message)';
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':name', $this->name, PDO::PARAM_STR);
        $stmt->bindParam(':email', $this->email, PDO::PARAM_STR);
        $stmt->bindParam(':message', $this->message, PDO::PARAM_STR);
        $stmt->execute();
    }
}