/*
 * Dette script definerer klassen Kurv
*/
//Definition af klassen kurv
function Kurv(x, y, bredde, dybde, speed) {
    /* Den første del af funktionen er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    
    this.x = x;
    this.y = y;
    this.bred = bredde;
    this.dyb = dybde;
    this.speed = speed;
    this.col = [250,230,150];
// Tegning af kurven på canvas
    this.tegn = function(img) {
        fill(this.col);
        image(img, this.x, this.y);
        rect(this.x, this.y, this.bred, this.dyb);

    }
    
//Den gamle move funktion, til at flytte turban
    this.move = function(tast) {
        if (tast == 'w' || tast== 'W') {
            this.y -= this.speed;
            if (this.y < 0) {this.y = 0};
        }
        if (tast == 's' || tast == 'S') {
            this.y += this.speed;
            if (this.y > height-this.dyb) {this.y = height - this.dyb};
            
        }
        if (tast == 'a' || tast== 'A') {
            this.x -= this.speed;
            if (this.x < 0) {this.x = 0};
        }
        if (tast == 'd' || tast== 'D') {
            this.x += this.speed;
            if (this.x > height-this.bred) {this.x = height - this.bred}
            
        }
    }
// En funktion som tjekker om en tast er nede og flytter kurven
    this.checkMove = function() {
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
            if (this.y < 0) {this.y = 0};
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
            if (this.y > height-this.dyb) {this.y = height - this.dyb};
            
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
            if (this.x < 0) {this.x = 0};
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
            if (this.x > width-this.bred) {this.x = width - this.bred}
            
        }
    }
//Tjekker for hvornår at bolden rammer yderste pixel af canvas og tæller "tabte point"
    this.grebet = function(xa, ya, ra) {
        if ((ya < this.y+3 && ya > this.y-3) && xa > this.x && xa < this.x+this.bred) {
            return true;
        }
        else {
            return false;
        }
    }

} 