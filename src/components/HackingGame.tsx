import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Zap, Lock, Unlock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HackingGame = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [isHacking, setIsHacking] = useState(false);
  const [targetSystem, setTargetSystem] = useState('SECURE_SERVER_001');
  const terminalRef = useRef<HTMLDivElement>(null);

  const hackingCommands = [
    'nmap -sS target.system.com',
    'sqlmap -u "http://target.com/login" --dbs',
    'hydra -l admin -P wordlist.txt ssh://target.com',
    'msfconsole -x "use exploit/windows/smb/ms17_010_eternalblue"',
    'burpsuite --target http://webapp.target.com',
    'wireshark -i eth0 -f "tcp port 443"',
    'metasploit > exploit -j',
    'john --wordlist=rockyou.txt hashes.txt'
  ];

  const responses = [
    'Host is up (0.023s latency)',
    'Database: users_db found',
    'SSH login successful: admin:password123',
    'Exploit completed, but no session was created',
    'Vulnerability detected: SQL Injection',
    'Capturing packets... 2847 packets captured',
    'Session 1 opened (192.168.1.100:4444 -> target:1337)',
    'Password cracked: $1$abc$xyz123'
  ];

  const typeText = (text: string, delay = 50) => {
    return new Promise<void>((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        setTerminalText(prev => {
          const newText = [...prev];
          if (newText.length === 0) newText.push('');
          newText[newText.length - 1] = text.slice(0, i + 1);
          return newText;
        });
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, delay);
    });
  };

  const addLine = (text: string) => {
    setTerminalText(prev => [...prev, text]);
  };

  const startHacking = async () => {
    if (isHacking) return;
    
    setIsHacking(true);
    setTerminalText([]);
    
    await typeText(`root@kali:~# Initiating penetration test on ${targetSystem}`);
    addLine('');
    await typeText('> Loading exploit modules...');
    addLine('> Scanning for vulnerabilities...');
    
    // Simulate hacking process
    for (let i = 0; i < 3; i++) {
      const command = hackingCommands[Math.floor(Math.random() * hackingCommands.length)];
      const response = responses[Math.floor(Math.random() * responses.length)];
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      await typeText(`root@kali:~# ${command}`);
      addLine('');
      await new Promise(resolve => setTimeout(resolve, 800));
      await typeText(`> ${response}`);
      addLine('');
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    await typeText('> SYSTEM COMPROMISED - ACCESS GRANTED');
    addLine('> Exploit completed successfully!');
    addLine('> Generating vulnerability report...');
    
    setScore(prev => prev + (currentLevel * 100));
    setCurrentLevel(prev => prev + 1);
    setTargetSystem(`SECURE_SERVER_${String(currentLevel + 1).padStart(3, '0')}`);
    setIsHacking(false);
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setScore(0);
    setTerminalText([]);
    setTargetSystem('SECURE_SERVER_001');
    setIsHacking(false);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalText]);

  if (!isActive) {
    return (
      <Card className="cyber-card-glass border-accent/30 hover:border-accent/60 transition-all duration-500 hover:shadow-cyber cursor-pointer group"
            onClick={() => setIsActive(true)}>
        <div className="p-6 text-center">
          <div className="relative mb-4">
            <Terminal className="w-12 h-12 mx-auto text-accent animate-pulse-glow" />
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:bg-accent/30 transition-colors"></div>
          </div>
          <h3 className="text-lg font-semibold mb-2 glow-text">Interactive Hacking Terminal</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Test your skills with our ethical hacking simulator
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-accent">
            <Shield className="w-4 h-4" />
            <span>Safe & Educational</span>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="cyber-card-glass border-accent/30 w-full max-w-2xl">
      <div className="p-4 border-b border-accent/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-accent" />
          <span className="font-mono text-sm text-accent">ETHICAL HACKING SIMULATOR</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-muted-foreground">Level: {currentLevel}</span>
          <span className="text-accent">Score: {score}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div 
          ref={terminalRef}
          className="bg-black/80 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm terminal-glow border border-accent/20"
        >
          <div className="text-accent mb-2">
            Target: {targetSystem} {currentLevel > 1 && <Unlock className="inline w-4 h-4 ml-2" />}
            {currentLevel === 1 && <Lock className="inline w-4 h-4 ml-2" />}
          </div>
          {terminalText.map((line, index) => (
            <div key={index} className="text-green-400 leading-relaxed">
              {line}
              {index === terminalText.length - 1 && isHacking && (
                <span className="animate-pulse">_</span>
              )}
            </div>
          ))}
          {!isHacking && terminalText.length === 0 && (
            <div className="text-muted-foreground">
              Click "Start Hack" to begin penetration testing...
            </div>
          )}
        </div>
        
        <div className="flex gap-3 mt-4">
          <Button 
            onClick={startHacking}
            disabled={isHacking}
            className="cyber-button-primary flex-1"
          >
            <Zap className="w-4 h-4 mr-2" />
            {isHacking ? 'Hacking in Progress...' : 'Start Hack'}
          </Button>
          <Button 
            onClick={resetGame}
            variant="outline"
            className="cyber-button-ghost"
          >
            Reset
          </Button>
          <Button 
            onClick={() => setIsActive(false)}
            variant="ghost"
            size="sm"
          >
            ×
          </Button>
        </div>
        
        <div className="mt-3 text-xs text-muted-foreground text-center">
          Educational simulation - No real systems are harmed
        </div>
      </div>
    </Card>
  );
};

export default HackingGame;