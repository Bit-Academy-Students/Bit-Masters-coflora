import subprocess
import os

def pull_all_branches():
    try:
        print("Check all branches")
        allBranches = subprocess.run(['git', 'branch', '-a'], check=True, capture_output=True, text=True)

        print("Reading branches...")
        branches = allBranches.stdout.splitlines()
        for branch in branches:
            targetBranch = branch.split("/")
            success = ""            
            for target in targetBranch:
                target = target.replace("  ", "")
                if "origin" not in target and "remotes" not in target and "* main" not in target:
                    print(target)
                    os.system(f"git checkout {target}")

        print("All branches have been pulled successfully.")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")

pull_all_branches()
