# tiny-stack-vm

A tiny stack VM for make.fun's tiny-stack-vm-01 bounty.

`main.ts` runs the 40 instances in `$MAKEFUN_INPUT_DIR` on the kit's
ISA and writes each program's output and exit code to `$MAKEFUN_OUTPUT_DIR`.

32-bit wrapping integers, 256-value stack, 64-deep call stack, 256 words
of memory, 1,000,000-step limit, all ten traps with exact exit codes.

Node 22, builtins only. No dependencies, no network.
