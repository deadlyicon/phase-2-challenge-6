[ ] When you run a command in the terminal, where does BASH look for that command?
BASH looks for the command within the existing/native Shell commands.

[ ] On a UNIX computer, how do you stop a running process?
In UNIX you can kill a running process by sending it a kILL command.
kill –N PID (You pass it the process ID)

[ ] What packages do you have installed via homebrew?
Here's the output of my 'brew list':
[23:29] [~/guild/phase-2-challenge] [master*] $ brew list
autoconf		gdbm			libtool			rbenv
automake		gettext			makedepend		rbenv-gemset
aws-shell		glib			mercurial		readline
awscli			htop			mongodb			sqlite
bazel			icu4c			openssl			the_silver_searcher
cairo			imagemagick		pcre			watchman
elixir			jpeg			pixman			wxmac
erlang			libevent		pkg-config		xz
exercism		libffi			python
fontconfig		libpng			python3
freetype		libtiff			qt

[ ] On a UNIX computer, how do you find the process id of a running process?
You can do so by running 'ps' and grepping for the particular process.
$ps ax | grep <process>

[ ] In a terminal, what does control-c do?
control-c kills the current process.

[ ] In a terminal, what does control-a do?
control-a brings the cursor at the beginning of the line.

[ ] In a terminal, what does control-e do?
control-e brings the cursor at the end of the line

[ ] What keyboard shortcut do you use to split the screen in your editor?
In the Atom editor it's "command + k"

[ ] What keyboard shortcut do you use to split the screen in your terminal?

[ ] When a terminal command completes, how can you tell if it was successful or not?
The cursor should return to the next prompt.

[ ] What does your ~/.gitconfig have in it? (paste the whole file here)
```
[init]

[user]
        email = fodesdiop@gmail.com
        name = Fodé Diop

[color]
        ui              = true

[core]
        excludesfile = /Users/trinity/.gitignore_global
        autocrlf        = input
        quotepath       = false
        editor          = emacsclient

[alias]
        lc              = log ORIG_HEAD.. --stat --no-merges
        ci              = commit
        co              = checkout
        st              = status
        br              = branch
        stop            = rm --cached
        remshow         = remote show origin
        unstage         = reset HEAD
        configg         = config --global
        cifirst         = commit -a -m\"First Edition\"
        configls        = config -l
        last            = cat-file commit HEAD
        hardreset       = reset --hard HEAD
        diffns          = diff --name-status
        show-gra        = log --graph --abbrev-commit --pretty=oneline
        grep            = grep -I
        nodiff          = diff --no-ext-diff
        ribbon          = tag --force _ribbon origin/master
        catchup         = log --patch --reverse --topo-order _ribbon..origin/master
        dfw             = diff --ignore-space-change
        pl              = log --graph --pretty=oneline --decorate=full --oneline

[diff "plconv"]
        textconv        = plutil -convert xml1

        [diff "localizablestrings"]
                textconv        = iconv -f utf-16 -t utf-8

        [difftool "emacs"]
                cmd = /usr/local/bin/emacsclient

        [instaweb]
                local                 = true
                httpd                 = webrick
                port                  = 8888

        [push]
                default = upstream

        [http]
                sslVerify = false
        [difftool "sourcetree"]
                cmd = opendiff \"$LOCAL\" \"$REMOTE\"
                path =
        [mergetool "sourcetree"]
                cmd = /Applications/SourceTree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
                trustExitCode = true
        [commit]
                template = /Users/davec/.stCommitMsg
        [filter "lfs"]
                clean = git-lfs clean -- %f
                smudge = git-lfs smudge -- %f
                required = true
```

[ ] What is the difference between a relative and absolute path?
In a relative path you are specifying the path relative to your current working directory.
In an absolute path you are specifying the full path of the resource.

[ ] Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
$cd ../pinterest-for-dogs

[ ] What keyboard shortcut do you use, in your editor, when you want to open a specific file?
command + space

[ ] What files or folders do you want all git repositories to ignore?
The files listed in the .gitignore

[ ] What is the main difference between == and === in JavaScript?
== checks for value equality while === checks for value and type equality.
