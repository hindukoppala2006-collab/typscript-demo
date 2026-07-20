class PrimeAnalyzer {
    private prime: number[] = [];
    private max: number = 1; 

    private isPrime(num: number): boolean {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        const bound = Math.sqrt(num);
        for (let i = 5; i <= bound; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }

    public countPrimesUpto(limit: number): number {
        if (limit < 2) return 0;
        
        if (limit > this.max) {
            for (let i = this.max + 1; i <= limit; i++) {
                if (this.isPrime(i)) {
                    this.prime.push(i);
                }
            }
            this.max = limit;
        }
        
        let count = 0;
        for (let i = 0; i < this.prime.length; i++) {
            const prime = this.prime[i];
            if (prime <= limit) {
                count++; 
            }
        }
        return count; 
    }
}

const analyzer = new PrimeAnalyzer();
const countTo20 = analyzer.countPrimesUpto(20);
console.log(`Number of primes up to 20: ${countTo20}`); 


