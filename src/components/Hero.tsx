import React, { useEffect, useState } from 'react';
import { ChevronRight, Code2, Terminal, Braces, Database, Cloud, Cpu } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [terminalText, setTerminalText] = useState('');
  const [pythonText, setPythonText] = useState('');

  const codeSnippet = `{
  "future": {
    "tech": "AI",
    "innovation": true,
    "stack": ["React", "Node.js", "Python"],
    "features": {
      "machineLeaning": true,
      "cloudNative": true,
      "realtime": true
    }
  }
}`;

  const terminalCommands = `$ npm create vite@latest my-ai-app
$ cd my-ai-app
$ npm install
$ npm run dev

> my-ai-app@0.0.0 dev
> vite

  VITE v5.0.0  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
`;

  const pythonCode = `import tensorflow as tf
from transformers import AutoModel

class AIModel:
    def __init__(self):
        self.model = AutoModel.from_pretrained(
            "latest-ai-model"
        )
    
    def predict(self, input_data):
        return self.model.generate(
            input_data,
            max_length=512
        )`;

  useEffect(() => {
    setIsVisible(true);
    
    let jsonIndex = 0;
    const jsonTimer = setInterval(() => {
      setText(codeSnippet.slice(0, jsonIndex));
      jsonIndex++;
      if (jsonIndex > codeSnippet.length) clearInterval(jsonTimer);
    }, 30);

    let terminalIndex = 0;
    const terminalTimer = setInterval(() => {
      setTerminalText(terminalCommands.slice(0, terminalIndex));
      terminalIndex++;
      if (terminalIndex > terminalCommands.length) clearInterval(terminalTimer);
    }, 20);

    let pythonIndex = 0;
    const pythonTimer = setInterval(() => {
      setPythonText(pythonCode.slice(0, pythonIndex));
      pythonIndex++;
      if (pythonIndex > pythonCode.length) clearInterval(pythonTimer);
    }, 25);

    return () => {
      clearInterval(jsonTimer);
      clearInterval(terminalTimer);
      clearInterval(pythonTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A1120]">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 text-blue-500/50"
              style={{
                left: `${i * 5}%`,
                animation: `code-rain ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="text-sm mono">
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(to right, #193154 1px, transparent 1px),
                             linear-gradient(to bottom, #193154 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-8 w-80 h-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 p-4 transform rotate-6 animate-float backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5 text-blue-500/80" />
            <span className="text-xs text-blue-400/80 font-mono">config.json</span>
          </div>
          <pre className="text-xs text-blue-400/80 font-mono overflow-x-auto">
            <code>{text}</code>
          </pre>
        </div>
        
        <div className="absolute top-1/3 -right-4 w-96 h-auto bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 p-4 transform -rotate-6 animate-float animation-delay-200 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-purple-500/80" />
            <span className="text-xs text-purple-400/80 font-mono">terminal</span>
          </div>
          <pre className="text-xs text-purple-400/80 font-mono whitespace-pre-wrap">
            <code>{terminalText}</code>
          </pre>
        </div>

        <div className="absolute bottom-1/4 left-1/4 w-96 h-auto bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-xl border border-pink-500/20 p-4 transform rotate-12 animate-float animation-delay-400 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Braces className="w-5 h-5 text-pink-500/80" />
            <span className="text-xs text-pink-400/80 font-mono">model.py</span>
          </div>
          <pre className="text-xs text-pink-400/80 font-mono overflow-x-auto">
            <code>{pythonText}</code>
          </pre>
        </div>

        <div className="absolute top-1/2 right-1/4 flex gap-8 animate-float animation-delay-600">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Database className="w-6 h-6 text-blue-500/80" />
          </div>
          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Cloud className="w-6 h-6 text-purple-500/80" />
          </div>
          <div className="w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-pink-500/80" />
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-title-slide-up">
                AIエンジニア講座
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-title-slide-up animation-delay-300 mt-2">
                未来のエンジニアへ
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-400/90 leading-relaxed animate-fade-in animation-delay-600 font-mono">
              実践的なAI開発スキルを<br className="hidden md:block" />
              最先端の環境で学ぶ
            </p>
            
            <div className="flex justify-center items-center animate-fade-in animation-delay-800">
              <a
                href="https://line.me/R/ti/p/@687dqxem"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 font-mono"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-45 animate-shine"></div>
                <span className="relative flex items-center font-medium">
                  講座説明会は
                  <br />
                  コチラの公式Lineから
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}